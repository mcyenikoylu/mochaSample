
var assert = require('assert');
import { Button, MyButton} from '../MyButton';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import ReactJSDOM from 'react-jsdom';
import Enzyme from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//configure({ adapter: new Adapter() });
import 'jsdom-global/register';
import jsdom from 'jsdom'

// Enzyme.configure({ adapter: new Adapter() });
// global.document = new jsdom.JSDOM ('<!doctype html><html><body></body></html>');
// global.document = document;

function setUpDomEnvironment() {
    const { JSDOM } = jsdom;
    const dom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/'});
    const { window } = dom;

    global.window = window;
    global.document = window.document;
    global.navigator = {
        userAgent: 'node.js',
    };
    copyProps(window, global);
}

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
}

setUpDomEnvironment();

configure({ adapter: new Adapter() })

// var MyObject = {
//     counter : 1,
//     increment: function(){
//         var self =this;
//         return new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 self.counter = self.counter+1;
//                 resolve();

//             },10);
//         });
//     }
// }

 describe('Async Tests',function(){
    it("Testing my button click count increments 1",function(){
         var m = new MyButton();
         assert.equal(m.clickCount,0);
         m.onClick();
         assert.equal(m.clickCount,1);
    });
 });

describe('React component Tests',function(){
    it("Testing my button buttontesi", function() {
   
        const wrapper = mount(<Button />);
        var div = wrapper.find("div");
        assert.equal(div.text(),"buttontesi");
    });
});

describe('React component Tests',function(){
    it("Testing my button cliced", function() {
     
        const wrapper = mount(<Button label="baslik" />);
        assert.equal(wrapper.state().clicked,false);

    });
});

describe('React component Tests',function(){
    it("Testing my button cliced simulate", function() {
       
        const wrapper = mount(<Button label="buttontesi" />);
        var div = wrapper.find("div");
        assert.equal(wrapper.state().clicked,false);
        div.simulate("click");
        assert.equal(wrapper.state().clicked,true);

    });
});