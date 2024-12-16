import Button from "../../../shared/ui/button";

export default function ButtonSort({sortList}){
    return(
        <Button
        textButton='Сортировать'
        funcBatton={sortList}
        className="sortBtn"
        />
    )
}