const Banner = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className="drop-shadow-sm content-end my-2" {...props}>
            <h1 className="text-4xl font-bold mb-2 text-center">
                CyHip Dynamic Themes
            </h1>
            <h2 className="text-4xl font-bold text-center">Tailwind + React</h2>
        </div>
    );
};

export { Banner };
