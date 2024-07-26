type HeaderTitleProps = {
    heading: string;
    text: string;

};

export default function HeaderTitle({
    heading,
    text,

}: HeaderTitleProps) {
    const words = heading.split(" ");
    const firstWord = words[0];
    const restWords = words.slice(1).join(" ");

    return (
        <h1
            className={`text-${text} max-md:text-5xl font-semibold uppercase`}
        >
            {firstWord}
            {restWords && <span className="text-secondary"> {restWords}</span>}
        </h1>
    );
}
