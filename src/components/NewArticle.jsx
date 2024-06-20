export const NewArticle = ({title, text}) => {
  return (
    <article className="h-[140px] border-b-2 border-Grayishblue py-7 lg:h-[160px] lg:pt-4 last:border-none">
        <h2 className="cursor-pointer hover:text-Softorange text-[20px] mb-3 font-bold lg:text-[16]px xl:text[20px]">{title}</h2>
        <p className="text-[15px]">{text}</p>
    </article>
  )
}
