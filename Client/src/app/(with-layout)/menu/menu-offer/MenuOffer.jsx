"use client"
import useMenu from '@/app/pages/utils/loadMenu';
import DesignOffer from '../DesignOffer';
import SectionTitle from '@/app/components/section-title/SectionTitle';
import Link from 'next/link';
const MenuOffer = () => {
    const [menu] = useMenu()
    const offeredMenus = menu.filter(item => item.category === "offered")
    return (
        <div>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <div className='grid grid-cols-2 gap-4'>
                {
                    offeredMenus.map(menu => <DesignOffer key={menu._id} menu={menu}></DesignOffer>)
                }
            </div>
            <div className='flex justify-center items-center mx-auto w-full'>
                <Link href={"/shop"}><button className="btn btn-xs btn-md">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuOffer;