$.fn.toggleChecked = function(checked){
    if ( checked )
        this .attr("checked","checked");
    else
        this .removeAttr("checked");
    return this;
};
