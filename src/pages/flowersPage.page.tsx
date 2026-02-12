import { SyntheticEvent, useState, useCallback, useRef } from 'react';
import SearchInputComponent from '../shared/components/SearchInputComponent';
import { useQuery } from '@tanstack/react-query';
import FlowerItem from '../components/FlowerItem';
import { getFlowersFunction } from '../api/appApi';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const FlowersPage = () => {
  const [filterState, setFilterState] = useState<string>('');
  const [displayLimit, setDisplayLimit] = useState(8);
  const observer = useRef<IntersectionObserver | null>(null);

  const { data } = useQuery(
    ['flowers'],
    async () => await getFlowersFunction(),
    {
      onError(error: AxiosError<{ message: string }>) {
        toast.error(error.response?.data?.message || 'An error occurred', {
          position: 'top-right',
        });
      },
    },
  );

  const flowers: IFlower[] = data?.items || [];
  const search = (filterState || '').trim().toLowerCase();

  const filteredFlowers: IFlower[] = flowers.filter((flower: IFlower) =>
    (flower.name ?? '').toLowerCase().includes(search),
  );

  const visibleFlowers: IFlower[] = filteredFlowers.slice(0, displayLimit);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          displayLimit < filteredFlowers.length
        ) {
          setDisplayLimit((prev) => prev + 8);
        }
      });

      if (node) observer.current.observe(node);
    },
    [displayLimit, filteredFlowers.length],
  );

  return (
    <div className="min-h-screen">
      <section className="pt-[80px]">
        <div className="min-h-[110px] text-[#FFFFFF]">
          <div className="mx-auto mt-[50px] [&_input]:w-[307px] md:[&_input]:w-[458px] lg:[&_input]:w-[600px] h-[56px] md:h-[70px] md:w-[600px] flex justify-center">
            <SearchInputComponent
              placeholder={'Looking for something specific?'}
              changeHandler={(value: string, event: SyntheticEvent) => {
                if (event) {
                  setFilterState(value);
                  setDisplayLimit(8);
                }
              }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto lg:max-w-[1220px] mt-[0px] flex flex-wrap justify-start p-[8px]">
        {visibleFlowers.map((flower: IFlower) => (
          <div
            key={flower.id}
            className="p-[8px] w-[50%] md:w-[33%] lg:max-w-[25%]"
          >
            <FlowerItem item={flower} />
          </div>
        ))}
      </section>

      <div
        ref={lastElementRef}
        className="h-20 w-full flex justify-center items-center"
      >
        {displayLimit < filteredFlowers.length && (
          <p className="text-gray-400 py-4 italic">Loading more flowers...</p>
        )}
      </div>
    </div>
  );
};

export default FlowersPage;
