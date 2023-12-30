export default function TabButton({children,isActive, ...props}){
    return(
        <>
            <li><button className={isActive?"active":null} {...props}>{children}</button></li>
        </>
    )
}