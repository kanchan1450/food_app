const Shimmer = () => {
    const shimmerElements = [];
  
    // Generate 18 shimmer elements
    for (let i = 0; i < 20; i++) {
      shimmerElements.push(
        <div key={i} className="rounded-lg w-[250] h-[200] bg-black"></div>
      );
    }
  
    return (
      <div className="flex ">
        {shimmerElements}
      </div>
    );
  };
  
  export default Shimmer;
  