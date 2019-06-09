
import assert from 'assert';
import { store, load } from '../../src/question1/lib';

describe('Test store array to string, load array from string', function () {

  describe('Store func', function(){

    it('should return true if store data is correct', function(){
      const array = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const expect = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = store(array);
      assert.equal(result, expect);
    });

    it('should return true if input different format and store data different string', function(){
      const array = [
        { key1: "value1", key2: "value2" },
        { key3: "value3" },
        { key4: "value4", key5: "value5" },
        { key6: "value6" }
      ]
      const expect = "key1=value1;key2=value2\nkey3=value3\nkey4=value4;key5=value5\nkey6=value6";
      const result = store(array);
      assert.equal(result, expect);
    });

  });

  describe('load function', function(){

    it('should return true if load data from string is correct', function(){
      const str = "key1=value1;key3=value3\nkeyA=valueA;keyB=valueB\nkeyC=valueC;keyD=valueD";
      const expect = [{
        key1: 'value1',
        key3: 'value3'
      },
      {
        keyA: 'valueA',
        keyB: 'valueB'
      },
      {
        keyC: 'valueC',
        keyD: 'valueD'
    }];
      const result = load(str);
      assert.deepEqual(result, expect);
    });

    it('should return true if load data different format from string is correct', function(){
      const str = "key1=value1\nkeyA=valueA\nkeyC=valueC;keyD=valueD";
      const expect = [{
        key1: "value1"
      },
      {
        keyA: 'valueA'
      },
      {
        keyC: "valueC",
        keyD: 'valueD'
      }];
      const result = load(str);
      assert.deepEqual(result, expect);
    });
  });
});