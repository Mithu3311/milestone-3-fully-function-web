import BestSellingCard from "./bestSellingCard";


const BestSelling = () => {
  const bestSell = [
    {
      src:"/pictures/duxpencil1.jpg",
      alt: "Dux pencil",
      title: "Dux Pencil 999 Super",
      discription: "Introducing the Dux Pencil 999 the perfect blend of quality and durability.",
      price: 270,

    },
    {
      src:"/pictures/royalcopy.jpg",
      alt: "Royal Metso",
      title: "Royal Metso Note Book Copy 300#",
      discription: "150 Pages Double Side Countable.",
      price: 70,

    },
    {
      src:"/pictures/duxshorpner.webp",
      alt: "Dux Shorpner",
      title: "Dux Pencil Sharpeners Jar Of 50 Pcs, Art # 502",
      discription: "Plastic manual sharpeners with metal blade.",
      price: 660,

    },
    
  ]
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Best Selling Products Here */}
      <div className="flex flex-wrap justify-center gap-5">
        {
          bestSell.map((items, i)=>(
            <BestSellingCard
            key={i} 
            src={items.src} 
            alt={items.alt} 
            title={items.title} 
            discription={items.discription} 
            price={items.price}/>
          ))
        }
      </div>
      
    </div>
  );
};

export default BestSelling;
