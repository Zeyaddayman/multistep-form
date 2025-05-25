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
            <p className="text-gray-400">{description}</p>
            <div className="mt-8">
                {children}
            </div>
        </section>
    )
}

export default ContentSection