const Services = () => (
  <section className="py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Portfolio Item 1 */}
        <div className="p-4 border border-gray-200 rounded transition-transform transform hover:scale-105 hover:shadow-lg animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p>Project description here.</p>
        </div>
        {/* Portfolio Item 2 */}
        <div className="p-4 border border-gray-200 rounded transition-transform transform hover:scale-105 hover:shadow-lg animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p>Project description here.</p>
        </div>
        {/* Portfolio Item 3 */}
        <div className="p-4 border border-gray-200 rounded transition-transform transform hover:scale-105 hover:shadow-lg animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">Project 3</h3>
          <p>Project description here.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
