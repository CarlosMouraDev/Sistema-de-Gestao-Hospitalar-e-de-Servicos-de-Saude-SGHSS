export default function Header() {
  return (
    <nav className='border-b border-gray-300 flex items-center justify-between fixed w-full bg-white'>
      <a href='/' className=''>
        <img
          src='/images/sus-logo-01.png'
          alt='logo'
          className='w-25 pt-2 pb-2 pl-3'
        />
      </a>
      <a
        href='/login'
        className='mr-9 pl-4 pr-4 pt-1 pb-1 rounded-xl bg-blue-700 text-white'
      >
        <p>Login</p>
      </a>
    </nav>
  );
}
