import CCard from '../common/CCard';
import { Pagination } from 'antd';

const recommendedProducts = [
  {
    id: 0,
    bldg_nm: '한남더힐',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/27/200/300',
  },
  {
    id: 1,
    bldg_nm: '트라움하우스5',
    sgg_nm: '서울 서초 서초',
    image: 'https://picsum.photos/id/28/200/300',
  },
  {
    id: 2,
    bldg_nm: '아크로서울포레스트',
    sgg_nm: '서울 성동 성수동1',
    image: 'https://picsum.photos/id/29/200/300',
  },
  {
    id: 3,
    bldg_nm: '더펜트하우스청담',
    sgg_nm: '서울 강남 청담',
    image: 'https://picsum.photos/id/24/200/300',
  },
  {
    id: 4,
    bldg_nm: '나인원한남',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/25/200/300',
  },
  {
    id: 5,
    bldg_nm: '파르크한남',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/26/200/300',
  },
  {
    id: 6,
    bldg_nm: '한남더힐',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/27/200/300',
  },
  {
    id: 7,
    bldg_nm: '트라움하우스5',
    sgg_nm: '서울 서초 서초',
    image: 'https://picsum.photos/id/28/200/300',
  },
  {
    id: 8,
    bldg_nm: '아크로서울포레스트',
    sgg_nm: '서울 성동 성수동1',
    image: 'https://picsum.photos/id/29/200/300',
  },
  {
    id: 9,
    bldg_nm: '더펜트하우스청담',
    sgg_nm: '서울 강남 청담',
    image: 'https://picsum.photos/id/24/200/300',
  },
  {
    id: 10,
    bldg_nm: '나인원한남',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/25/200/300',
  },
  {
    id: 11,
    bldg_nm: '파르크한남',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/26/200/300',
  },
  {
    id: 12,
    bldg_nm: '한남더힐',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/27/200/300',
  },
  {
    id: 13,
    bldg_nm: '트라움하우스5',
    sgg_nm: '서울 서초 서초',
    image: 'https://picsum.photos/id/28/200/300',
  },
  {
    id: 14,
    bldg_nm: '아크로서울포레스트',
    sgg_nm: '서울 성동 성수동1',
    image: 'https://picsum.photos/id/29/200/300',
  },
  {
    id: 15,
    bldg_nm: '더펜트하우스청담',
    sgg_nm: '서울 강남 청담',
    image: 'https://picsum.photos/id/24/200/300',
  },
  {
    id: 16,
    bldg_nm: '나인원한남',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/25/200/300',
  },
  {
    id: 17,
    bldg_nm: '파르크한남',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/26/200/300',
  },
  {
    id: 18,
    bldg_nm: '더펜트하우스청담',
    sgg_nm: '서울 강남 청담',
    image: 'https://picsum.photos/id/24/200/300',
  },
  {
    id: 19,
    bldg_nm: '나인원한남',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/25/200/300',
  },
  {
    id: 20,
    bldg_nm: '파르크한남',
    sgg_nm: '서울 용산 한남',
    image: 'https://picsum.photos/id/26/200/300',
  },
];

export default function SearchList() {
  const onChangePage = (e) => {
    console.log('event:::', e);
  };

  return (
    <div>
      {recommendedProducts.length > 0 ? (
        <div className="w-full grid grid-cols-3 gap-11 gap-y-14">
          {recommendedProducts.map((v) => {
            return (
              <div key={v.id}>
                <CCard data={v} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>검색 조건에 해당하는 매물이 없습니다.</div>
      )}

      <div className="w-full flex justify-center mt-16">
        <Pagination defaultCurrent={1} total={50} onChange={onChangePage} />
      </div>
    </div>
  );
}
