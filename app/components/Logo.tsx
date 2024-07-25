//Put into a separate component so it can be displayed in multiple places

export default function Logo() {
    return (
        <div className="flex size-14">
            <img src='/logo/logo.png' alt="logo" />
        </div>
    );
}