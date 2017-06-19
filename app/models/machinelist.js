import DS from 'ember-data';

export default DS.Model.extend({
    machineAgentPresent: DS.attr('string'),
    machineName: DS.attr('string'),
    machineId: DS.attr('string'),
    tierName: DS.attr('string')
});
