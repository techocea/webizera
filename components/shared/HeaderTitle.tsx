interface HeaderTitleProps {
    title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
    return <h1 className="text-3xl lg:text-5xl font-bold tracking-wide text-white">{title}</h1>;
};

export default HeaderTitle;
