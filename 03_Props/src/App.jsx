import Card from "./components/Card"

const App = () => {
  return (
    <div>
      <div className="parent">
        <Card user='Prince Pandey' age={20} img='https://images.unsplash.com/photo-1773047112528-7ef5b5b39f9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user='Abhisek Sharma' age={18} img='https://images.unsplash.com/photo-1772436756247-8c15cb5149f0?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user='Gopesh Dev' age={69} img='https://images.unsplash.com/photo-1773176647951-d8f618dee942?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>
    </div>
  )
}

export default App
