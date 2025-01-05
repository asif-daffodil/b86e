import AboutMe from "./Components/AboutMe/AboutMe"
import AboutUs from "./Components/AboutUs/AboutUs"
import Button from "./Components/Button"


function App() {
  const peraStyle = {
    color: "blue",
    fontSize: "18px",
    fontWeight: 400
  }

  return (
    <>
      <h1 style={{color: "red", fontSize: "24px", fontWeight: 300}} >Hello World</h1>
      <p style={peraStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, maxime cum unde deleniti, labore natus eum temporibus nemo repudiandae, sapiente hic. Sequi veniam quo optio dicta repudiandae doloremque quae quas, commodi magni, nostrum nobis eum ea id soluta at ullam impedit aliquam? Distinctio impedit, sed eveniet ea eligendi quam eius unde sequi obcaecati perferendis ipsa pariatur. Debitis ipsa sit recusandae?
      </p>
      <Button />
      <AboutMe />
      <AboutUs />
    </>
  )
}

export default App
