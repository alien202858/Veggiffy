import React from 'react'
const blogData = [
    {
      title: "You should not be hindered by these pains.",
      date: "June 1, 2020",
      views: "2.1K views",
      imgSrc: "https://img.freepik.com/free-photo/fashion-models-paper-cut-out-style_23-2149374793.jpg?w=996&t=st=1720524804~exp=1720525404~hmac=7612c5c6d6908034794b99cbe7efc592849b3e4ee029c6cf449afb2146c4a648",
      category: "Convenire",
    },
    {
      title: "To the stars through difficulties.",
      date: "June 2, 2020",
      views: "2.2K views",
      imgSrc: "https://img.freepik.com/free-photo/medium-shot-stylish-woman-looking-away_23-2148311304.jpg?w=2000&t=st=1720524702~exp=1720525302~hmac=03a9b3f215f9b3cccc7f05344c45547a5812a7dec6b3a7ec0f661f046d9b6db5",
      category: "Convenire",
    },
    {
      title: "Seize the day.",
      date: "June 3, 2020",
      views: "2.3K views",
      imgSrc: "https://img.freepik.com/free-photo/flat-lay-woman-style-accessories-red-knitted-sweater-checkered-shirt-denim-jeans-black-leather-boots-hat-autumn-fashion-trend-view-from-vintage-photo-camera-passport_285396-5117.jpg?w=2000&t=st=1720524758~exp=1720525358~hmac=d285312da948d347d116d6463ca79154888d176d5d43a986d502139796179dbd",
      category: "Convenire",
    },
    {
      title: "I came, I saw, I conquered.",
      date: "June 4, 2020",
      views: "2.4K views",
      imgSrc: "https://img.freepik.com/free-photo/young-graceful-tender-ballerina-pastel-wall_155003-3866.jpg?w=1480&t=st=1720524843~exp=1720525443~hmac=cdc635a81be6fa9e1cad3fe98c25de2b2513bbbe7bae0fe9db468dc5493f960c",
      category: "Convenire",
    },
  ];
const Resources = () => {
  return (
    <section className='px-6 lg:px-12 py-20'>
        <h1 className='text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>
        Resources</h1>

        <article className='py-6 sm:py-12'>
            <div className='container p-6 mx-auto space-y-8'>
                <div className='space-y-2 text-center '>
                <h2 className='text-3xl font-bold'>Required Pro Membership</h2>
                </div>
                <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 md-8'>
                    {
                        blogData.map((blog, index) => (
                            <div key={index} className='flex flex-col items-center space-y-2'>
                                <img src={blog.imgSrc} alt={blog.title} className='w-64 h-64 object-cover rounded-lg'/>
                                <h3 className='text-2xl font-semibold'>{blog.title}</h3>
                                <p className='text-sm text-gray-500'>{blog.date} | {blog.views}</p>
                                <p className='text-sm text-gray-500'>{blog.category}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </article>
    </section>
  )
}

export default Resources
