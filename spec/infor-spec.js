var infor = require('../main/infor');

describe("statistical discount goods' information",function(){
    var inputs;
    var answer;
    var result;
    it('return pre',function(){
        inputs=[{code:'ITEM000001',number:5,name:'雪碧',unit:'瓶',price:3.00,count:12.00},
                {code:'ITEM000003',number:2,name:'荔枝',unit:'斤',price:15.00,count:30.00},
                {code:'ITEM000005',number:3,name:'方便面',unit:'袋',price:4.50,count:9.00},
        ];
        result=infor(inputs);
        answer=[{name:'雪碧',num:1,unit:'瓶',price:3.00},
                {name:'方便面',num:1,unit:'袋',price:4.50}
        ]
        expect(result).toEqual(answer);
    });
});