// SECTION HEADING COMPONENT USING AS A PROP TO NOT REPEAT THE SAME HEADING
// {children} IS A PROP THAT WILL BE PASSED TO THE COMPONENT
// {children} react.node is a type that accepts any type of children

type SectionHeadingProps = {children: React.ReactNode}

const SectionHeading = ({children}: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>
  )
}
export default SectionHeading