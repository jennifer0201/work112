var count = require('../main/count');

describe('count the number of goods', function () {
    var inputs;
    var answer;
    var result;
    it('return goods',function(){
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
        result=count(inputs);
        answer=[{code:'ITEM000001',number:5},
                {code:'ITEM000003',number:2},
                {code:'ITEM000005',number:3}
        ]
        expect(result).toEqual(answer);
    });
});