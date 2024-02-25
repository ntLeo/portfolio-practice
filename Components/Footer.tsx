
const Footer = () => {
  return (
    <footer className="text-center mb-4 px-4 text-gray-500">
        <small className="mb-2 text-md block">  {/* <small> TAG IN DEFAULT INLINE DON'T FORGET TO MAKE IT BLOCK  */}
            &copy; 2021, All rights reserved.
        </small>
        <p className="text-sm ">
            <span className="font-semibold">About ths website:</span> built this website using Next.js, Framer Motion, Tailwind CSS and TypeScript. Vercel hosting.
        </p>
       
    </footer>
  )
}
export default Footer