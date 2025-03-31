export function Footer() {
  const Author = { 
    name: "藏在心底", // 这里是你想指定的作者名字
    url: "https://search.789168.xyz" // 作者页面的 URL
  };

  return (
    <>
      {/* MIT 和 LICENSE 链接 */}
      <a 
        href="https://loveandshare:4533" 
        target="_blank" 
        className="text-pink-400 hover:text-pink-500 font-cute text-lg"
      >
        可爱 女人
      </a>

      <span>
        <span className="text-pink-400 font-cute text-lg">NewsNow © 2024 By </span>

        {/* 作者链接 */}
        <a 
          href={Author.url} 
          target="_blank" 
          className="text-pink-400 hover:text-pink-500 font-cute text-lg"
        >
          {Author.name}
        </a>
      </span>
    </>
  );
}

