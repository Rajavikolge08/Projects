const List = ({recipes}) => {
    return(
        <div>
        {
            recipes.map{recipe=>(
                <div>
                <h2>{recipe.name}</h2>
                </div>
            )}
        }
        </div>
    );
}
export default List;