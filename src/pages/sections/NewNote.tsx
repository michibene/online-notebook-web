export default function NewNote() {
    return (
        <section className="p-4 lg:p-5 bg-[#474749] rounded-[2rem] rounded-tl-none drop-shadow-[8px_8px_70px_rgba(97,104,112,0.60)]">
            <form className="p-8 bg-customGrayLight text-mainBlack space-y-4 rounded-3xl rounded-tl-none">
                <input
                    type="text"
                    name="title"
                    placeholder="New note title"
                    className="pb-1 w-full bg-customGrayLight text-2xl lg:text-3xl font-semibold
                            focus:outline-none focus:border-solid focus:border-b-2 focus:border-customGray"
                />

                <textarea
                    name="body"
                    rows={8}
                    placeholder="Write your text"
                    className="w-full bg-customGrayLight lg:text-lg focus:outline-none resize-none"
                />

                <div className="flex flex-col lg:flex-row justify-between gap-2">
                    <div className="flex justify-between items-center gap-6">
                        <p>Set a date:</p>
                        <p>28.02.2023</p>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        <p>Choose a color:</p>
                        <span
                            className="mb-1 h-8 w-8 rounded-full bg-noteYellow border-mainBlack ring-noteYellow
                                    border-2 border-opacity-70 ring-4 ring-opacity-60"
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}
