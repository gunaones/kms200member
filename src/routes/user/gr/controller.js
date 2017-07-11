'use strict';

module.exports = function gr($scope, $window, $http) {
  console.log('axios get gr');
  $scope.phones = [{
    name: 'Nexus S',
    snippet: 'Fast just got faster with Nexus S.'
  }, {
    name: 'Nexus S',
    snippet: 'Fast just got faster with Nexus S.'
  }, {
    name: 'Motorola XOOM™ with Wi-Fi',
    snippet: 'The Next, Next Generation tablet.'
  }, {
    name: 'MOTOROLA XOOM™',
    snippet: 'The Next, Next Generation tablet.'
  }];

  function updategr(mid) {
    var node = {};
    var img = {};
    var link = {};
    for (var i = 1; i <= 15; i++) {
      node[i] = {
        name: "KMS0001A1",
        title: "KMS200",
        desc: "Platinum",
        contact: "2017-06-05",
      }

      img[i] = "7.jpg"

      link[i] = {
        href: "javascript:$('#mid').val('" + i + "');updategr('" + i + "')"
      }
    }


    var simple_chart_config = {
      chart: {
        container: "#tree-simple",
        connectors: {
          type: 'step'
        },
        node: {
          HTMLclass: 'nodeTree'
        }
      },

      nodeStructure: {
        text: node[1],
        image: img[1],
        link: link[1],
        children: [{
          text: node[2],
          image: img[2],
          link: link[2],
          children: [{
            text: node[4],
            image: img[4],
            link: link[4],
            children: [{
              text: node[8],
              image: img[8],
              link: link[8],
            }, {
              text: node[9],
              image: img[9],
              link: link[9],
            }]
          }, {
            text: node[5],
            image: img[5],
            link: link[5],
            children: [{
              text: node[10],
              image: img[10],
              link: link[10],
            }, {
              text: node[11],
              image: img[11],
              link: link[11],
            }]
          }]
        }, {
          text: node[3],
          image: img[3],
          link: link[3],
          children: [{
            text: node[6],
            image: img[6],
            link: link[6],
            children: [{
              text: node[12],
              image: img[12],
              link: link[12],
            }, {
              text: node[13],
              image: img[13],
              link: link[13],
            }]
          }, {
            text: node[7],
            image: img[7],
            link: link[7],
            children: [{
              text: node[14],
              image: img[14],
              link: link[14],
            }, {
              text: node[15],
              image: img[15],
              link: link[15],
            }]
          }]
        }]
      }
    };

    // var chart = new Treant(simple_chart_config, function() { alert( 'Tree Loaded' ) }, $ );

    var my_chart = new Treant(simple_chart_config);
  }
  updategr('');
}