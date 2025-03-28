/**
 * @typedef { "left" | "center" | "right"} Direction
 * @param {Object} param0 
 * @param {Direction} param0.direction The direction where the divider will be visible
 * @param {String} param0.className The direction where the divider will be visible
 */
export default function Divider({direction, className}) {
    let extraClasses = "h-[2px] border-none rounded-3xl w-full " + className;
    switch (direction) {
        case "right": 
            extraClasses += " bg-gradient-to-l from-55% from-accent to-background";
            break;
        case "left":
            extraClasses += " bg-gradient-to-r from-55% from-accent to-background";
            break;
        default:
            extraClasses += " bg-gradient-to-r from-background from-0% via-accent via-50% to-background to-100%"
            break;
    }
    return <hr className={extraClasses} />
}