import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        showItem(item){
            alert(item);
        }
    }

});
