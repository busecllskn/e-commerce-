import React from 'react';
import fotohp1 from '../assets/fotohp1.png';
import fotohp2 from '../assets/fotohp2.png';
import fotohp3 from '../assets/fotohp3.png';

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: fotohp1,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 2,
      image: fotohp2,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 3,
      image: fotohp3,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-24 bg-white">
      {/* Başlık Alanı */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[#23A6F0] text-sm font-bold uppercase tracking-wider mb-2">Practice Advice</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] tracking-tight mb-2">Featured Posts</h2>
        <p className="text-[#737373] text-sm max-w-md">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Kartlar Alanı */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col bg-white shadow-md border border-[#E8E8E8] rounded-sm overflow-hidden">
            {/* Görsel ve New Etiketi */}
            <div className="relative w-full h-[300px]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded shadow">
                {post.tag}
              </span>
            </div>

            {/* İçerik Alanı */}
            <div className="p-6 flex flex-col gap-3">
              {/* Kategoriler */}
              <div className="flex items-center gap-3 text-xs">
                <span className="text-[#8EC2F2] hover:underline cursor-pointer">Google</span>
                <span className="text-[#737373]">Trending</span>
                <span className="text-[#737373]">New</span>
              </div>

              {/* Başlık */}
              <h3 className="text-[#252B42] text-xl font-normal leading-snug">
                {post.title}
              </h3>

              {/* Açıklama */}
              <p className="text-[#737373] text-sm leading-relaxed">
                {post.description}
              </p>

              {/* Tarih ve Yorum */}
              <div className="flex items-center justify-between text-xs text-[#737373] py-2">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#23A6F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#23A6F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span>{post.comments}</span>
                </div>
              </div>

              {/* Learn More*/}
              <div className="pt-2">
                <button className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] font-bold text-sm transition-colors duration-200">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;