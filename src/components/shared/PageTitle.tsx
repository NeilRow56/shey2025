type PageTitleProps = {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div>
      <div className=''>
        <h1 className='mb-5 text-3xl font-extrabold text-[#1B4242]'>
          {' '}
          {title}
        </h1>
      </div>
    </div>
  )
}
