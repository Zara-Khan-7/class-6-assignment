export default function Home(){

  return(
    <div>
     <h1 className=" text-2xl font-serif text-center text-green-900 underline">🏠Welcome to Homepage🏠</h1><br></br>
     <h2 className="text-center text-2xl font-serif text-pink-600 underline">📝Assignment Keypoints 📝</h2><br></br>
      <ul className="text-center text-pink-700 text-xl font-serif">
        <li><p>🔗Creating a dynamic routing system using Next.js.</p></li>
        <li><p>🔗Creating a Country listing page.</p></li>
        <li><p>🔗Creating a display of the details of the selected Country"(By Using Props)".</p></li>
        <li><p>🔗Displaying the message"Country not found" for the unavailable/other url.</p></li>
      </ul>
    </div>
  )
}