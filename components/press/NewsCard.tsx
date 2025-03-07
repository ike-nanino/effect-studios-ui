import Image from "next/image";

 function NewsCard() {
  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
     
      <div className="p-4">
     
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          Connecting Africa
        </span>

   
        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
          Combining AI, fintech to solve African problems — Ericsson
        </h2>

   
        <p className="mt-2 text-sm text-gray-500">December 06, 2021</p>
      </div>

   
      <div className="relative w-full h-44">
        <Image
          src="/assets/images/man.jpg"
          alt="Fintech illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
   
      <div className="p-4">
      
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          Tech Labari
        </span>

      
        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        Ghana to Host the 14th Africa Fintech
        Summit on October 8th
        </h2>

      
        <p className="mt-2 text-sm text-gray-500">May 24, 2022 </p>
      </div>

    
      <div className="relative w-full h-44">
        <Image
          src="/assets/images/africa.jpg"
          alt="Fintech illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
 
      <div className="p-4">
  
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          Techstars
        </span>


        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        Midterm Report: Techstars Toronto’s
        Second 2021 Class
        </h2>

    
        <p className="mt-2 text-sm text-gray-500">Dec 06, 2021</p>
      </div>

      <div className="relative w-full h-44">
        <Image
          src="/assets/images/toronto.jpg"
          alt="Toronto illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
   
      <div className="p-4">
      
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          Medium
        </span>

       
        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        Wise granted approval to join Zengin,
        Japan’s domestic payment system
        </h2>

        <p className="mt-2 text-sm text-gray-500">December 06, 2021</p>
      </div>

    
      <div className="relative w-full h-44">
        <Image
          src="/assets/images/wise.jpg"
          alt="Fintech illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      
      <div className="p-4">
  
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          Further Africa
        </span>

  
        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        African startups to participate at
        Techstars Toronto October 2021 cohort
        </h2>

    
        <p className="mt-2 text-sm text-gray-500">October 23, 2021</p>
      </div>


      <div className="relative w-full h-44">
        <Image
          src="/assets/images/tech.jpg"
          alt="Fintech illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
    
      <div className="p-4">
      
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          TechCrunch
        </span>


        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        More African startups get into
        Techstars Toronto
        </h2>

 
        <p className="mt-2 text-sm text-gray-500">October 18, 2021</p>
      </div>


      <div className="relative w-full h-44">
        <Image
          src="/assets/images/tech.jpg"
          alt="Fintech illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    </div>
   
  );
}
export default NewsCard