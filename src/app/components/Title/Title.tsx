export const Title = (props: { text: string }) => {
  const { text } = props;
  return (
    <>
      <div className="text-[24px] font-[700] leading-[29px] text-[#EFEEE0] mb-[10px]">
        {text}
      </div>
    </>
  )
}