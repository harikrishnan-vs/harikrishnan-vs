import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">{children}</main>
    </>
  )
}

export default Layout
