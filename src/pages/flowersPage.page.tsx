import { SyntheticEvent, useEffect, useState } from 'react';
import SearchInputComponent from '../shared/components/SearchInputComponent';
import { useQuery } from '@tanstack/react-query';
import FlowerItem from '../components/FlowerItem';
import { getFlowersFunction } from '../api/appApi';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const FlowersPage = () => {
  // hooks
  const [filterState, setFilterState] = useState<string>('');

  // query hook
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

  const flowers = Array.isArray(data?.items) ? data?.items : [];

  const search = filterState.trim().toLowerCase();

  const filteredFlowers = flowers.filter((flower: IFlower) =>
    (flower.name ?? '').toLowerCase().includes(search),
  );

  return (
    <div className="min-h-screen">
      <section className="pt-[80px]">
        <div className="min-h-[110px] text-[#FFFFFF]">
          <div
            className="mx-auto mt-[50px] [&_input]:w-[307px] md:[&_input]:w-[458px] lg:[&_input]:w-[600px] h-[56px] md:h-[70px] md:w-[600px]
           flex justify-center"
          >
            <SearchInputComponent
              placeholder={'Looking for something specific?'}
              changeHandler={(value: string, event: SyntheticEvent) => {
                if (event) {
                  setFilterState(value);
                }
              }}
            />
          </div>
        </div>
      </section>
      <section className="mx-auto lg:max-w-[1220px] mt-[0px] flex flex-wrap justify-start p-[8px]">
        {filteredFlowers?.map((flower: IFlower) => (
          <div
            key={flower.id}
            className="p-[8px] w-[50%] md:w-[33%] lg:max-w-[25%]"
          >
            <FlowerItem item={flower} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FlowersPage;
