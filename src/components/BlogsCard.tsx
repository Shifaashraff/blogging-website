import React from 'react'
import Heading from './Heading';
import Cards from './Cards';



const data =[
  {
    id: 0,
    tittle: "The Beauty of Forests",
    desc: "Walking through a dense forest, you are enveloped by towering trees and the earthy scent of pine. Sunlight filters through the leaves, casting golden beams on the forest floor. The gentle rustle of leaves and the distant call of birds create a peaceful symphony, offering a retreat from the hustle of daily life.",
    img:"/home.jpg",
    tags: "Read more",
  },
  {
    id: 1,
    tittle: "The Power of Oceans ",
    desc: "The vastness of the ocean stretches beyond the horizon, its waves crashing against the shore with rhythmic intensity. Beneath the surface lies a world teeming with life, from the smallest plankton to the majestic whales. The salty breeze and the sound of water soothe the soul, reminding us of nature's immense power and beauty.",
    img: "/occean.jpg",
    tags: "Read more",
  },
  {
    id: 2,
    tittle: "Majestic Mountain Ranges",
    desc:  "Mountains rise high into the sky, their peaks often capped with snow, standing as ancient sentinels of the Earth. As you hike through winding trails, the air becomes cooler and crisper. The sight of distant valleys and cascading waterfalls takes your breath away, and the sense of accomplishment when reaching the summit is unparalleled.",
    img: "/mountain.jpg",
    tags: "Read more",
  },
  {
    id: 3,
    tittle: "The Serene Desert",
    desc:  "The desert may seem barren at first glance, but it is a place of subtle beauty and resilience. Golden dunes shift with the wind, and the endless expanse of sand stretches into the horizon. As the sun sets, the desert transforms into a canvas of warm colors, and at night, the sky reveals a breathtaking display of stars.",
    img: "/dessert.jpg",
    tags: "Read more",
  },
  {
    id: 4,
    tittle: "The Charm of Flowering Meadows ",
    desc:  "A meadow in full bloom is a spectacle of color and fragrance. Wildflowers of every hue sway gently in the breeze, and butterflies flutter from one bloom to the next. The scent of lavender, daisies, and wild roses fills the air, while bees buzz happily, gathering nectar. It’s a scene of quiet harmony and vibrant life.",
    img: "/flower.jpg",
    tags: "Read more",
  },
  {
    id: 5,
    tittle: "The Tranquility of Lakes",
    desc:   "A quiet lake nestled between mountains reflects the surrounding landscape like a mirror. The stillness of the water is only disturbed by the occasional ripple from a fish jumping or the gentle breeze across the surface. Whether it’s the early morning mist rising from the lake or the golden glow of sunset, the serenity of lakes is undeniable.",
    img: "/lake.jpg",
    tags: "Read more",
  },
]
const BlogsCard= () => {
  return (
    <div id='blogsCard' className='container pt-32'>
      <Heading title='Blogs' />
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Cards
        key={el.id} 
        title={el.tittle}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
        
      </div>
      
    </div>
  )
}

export default BlogsCard
