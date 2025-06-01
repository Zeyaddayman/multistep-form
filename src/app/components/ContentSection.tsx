interface IProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

const ContentSection = ({ title, description, children }: IProps) => {
    return (
        // section tag styled in global.css
        <section>
            <header className="text-2xl font-bold mb-4">{title}</header>
            <p className="text-gray-500">{description}</p>
            <div className="mt-8 flex-1 relative flex flex-col">
                {children}
            </div>
        </section>
    )
}

export default ContentSection