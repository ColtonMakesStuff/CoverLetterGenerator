// i need to make a component that uses tailwind css styling to house a prompt sections and a preview section, this is in a seperate componenent because i will want to reuse this to hous the diplay and edit sections as well 



const SectionContainer = ({contents}) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 border-solid border-2 border-black rounded-lg">
                {contents}
        </div>
    )
}

export default SectionContainer