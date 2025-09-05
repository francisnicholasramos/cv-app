import type {Education, Experience} from "../../src/data"

type SectionHeaderProps = {
    title: string;
    arraySection: Education[] | Experience[];
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title, arraySection}) => {
    return (
        <div> 
            {arraySection && arraySection.length > 0 ? (
                <div className="flex flex-col font-serif text-[#454545]">
                    <div className="font-bold uppercase">{title}</div>
                    <div className="border border-t-2"></div>
                </div>
            ) : null }
        </div>
    )
}

export default SectionHeader;
