const videoUrl = 'https://www.youtube.com/embed/uPlHbX7BlJY?si=Mnh0KuO0WCPd9Yuy'

export function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] border border-[#00B4D8]/30 bg-[#00B4D8]/8 p-[1px] shadow-[0_30px_70px_rgba(0,180,216,0.2)]">
          <div className="rounded-[38px] bg-[#001826]/85 p-8 md:p-10 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#00B4D8]" />
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Video</p>
            </div>
            {videoUrl && (
              <div className="aspect-video rounded-3xl overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="Aquaphobix overview video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}