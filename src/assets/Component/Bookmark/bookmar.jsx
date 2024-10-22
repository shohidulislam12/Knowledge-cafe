

const Bookmar = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="border-2 border-gray-100 my-3">
            <h2 className="text-3xl">{title}</h2>
        </div>
    );
};

export default Bookmar;