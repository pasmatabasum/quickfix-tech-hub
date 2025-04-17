
import PageContainer from "@/components/PageContainer";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3",  // Laptop repair with technician
      alt: "Laptop Repair Service",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",  // Technician working on laptop
      alt: "Computer Diagnostic",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1593941707681-8845cd4193bc",  // TV repair workshop
      alt: "TV Repair Center",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1603951629537-22fb274de197",  // TV technician working
      alt: "TV Technician at Work",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1497005367839-6ea852de8c01",  // Multiple laptop repairs
      alt: "Multiple Device Repairs",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",  // Laptop on desk
      alt: "Laptop Service Station",
    },
  ];

  return (
    <PageContainer>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary text-center mb-12">Our Repair Gallery</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4 bg-white">
                  <p className="text-center text-gray-700">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Gallery;
