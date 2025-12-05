const ftpServers = [
  {
    name: "BDIX Movie Server",
    url: "http://moviebdix.example",
    img: "https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg",
  },
  {
    name: "BD Music FTP",
    url: "http://bdmusicftp.example",
    img: "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg",
  },
  {
    name: "Bangla Natok Server",
    url: "http://natokbd.example",
    img: "https://images.pexels.com/photos/14777245/pexels-photo-14777245.jpeg",
  },
  {
    name: "Live Sports Server",
    url: "http://sportsftp.example",
    img: "https://images.pexels.com/photos/29949985/pexels-photo-29949985.jpeg",
  },
];

export default function FtpServer() {
  return (
    <main className="bg-gray-50 pb-20">
      {/* Hero */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <img
          src="https://webneel.com/sites/default/files/images/blog/2020/different-types-of-movie-posters.jpg"
          alt="FTP Server Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-sky-700/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-sky-300 drop-shadow-lg">
            FTP SERVER
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Enjoy Unlimited BDIX FTP Access
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Browse our collection of fastest BDIX connected FTP servers. Stream
          movies, download music, and enjoy high-speed experience with our
          optimized network infrastructure.
        </p>
      </section>

      {/* FTP Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ftpServers.map((server, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={server.img}
              alt={server.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {server.name}
              </h3>

              <a
                href={server.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Visit Server
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
