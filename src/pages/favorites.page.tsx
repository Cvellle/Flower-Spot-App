import { useQuery } from '@tanstack/react-query';
import FlowerItem from '../components/FlowerItem';
import { getFlowersFunction } from '../api/appApi';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const Favorites = () => {
  // query hook
  const { data } = useQuery(
    ['flowers'],
    async () => await getFlowersFunction(),
    {
      onError(error: AxiosError<{ message: string }>) {
        toast.error(error.response?.data.message || 'Signup failed', {
          position: 'top-right',
        });
      },
    },
  );

  const flowers = Array.isArray(data?.items) ? data?.items : [];

  return (
    <div className="min-h-screen pt-[80px]">
      <section className="mx-auto lg:max-w-[1220px] mt-[34px] flex flex-wrap justify-start p-[8px]">
        {flowers?.map((flower: IFlower) => (
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

export default Favorites;
