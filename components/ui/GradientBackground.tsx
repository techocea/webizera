export default function GradientCircle() {
    return (
        <div className="flex items-center justify-center h-full bg-gray-100">
            <div className="absolute z-[-20] top-[200px] right-10 inset-0 flex items-center justify-center">
                <div className="md:w-96 w-[500px] md:h-96 h-[600px] bg-gradient-to-b from-secondary to-primary  rounded-full filter blur-[100px]" />
            </div>
        </div>
    );
}
