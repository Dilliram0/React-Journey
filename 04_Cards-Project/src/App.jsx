import Card from "./components/Card"

const App = () => {


  const jobOpenings = [
  {
    brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 75,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    name: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 60,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    datePosted: "10 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 110,
    location: "Remote"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 85,
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 120,
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    name: "Tesla",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 70,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://www.adobe.com/homepage/assets/product-icons/jpg/default.jpg?width=1200&format=pjpg&optimize=medium",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 68,
    location: "Noida, India"
  },
  {
    brandLogo: "https://grapheine.com/wp-content/uploads/2018/10/uber-logo-2560x1576.webp",
    name: "Uber",
    datePosted: "12 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    location: "Singapore"
  }
];

  return (
    <div>
      <div className="parent">
      {jobOpenings.map(function(elem, idx){
        return <div key = {idx}>
        <Card company={elem.name} date={elem.datePosted} post = {elem.post}
                      tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} 
                      location={elem.location} logo={elem.brandLogo}    />
                      </div>
      })} 
        

      </div>
    </div>
  )
}

export default App
