// https://github.com/ninjaconcept/d3-force-directed-graph/tree/master

document.querySelector('.search-input').focus();

fetch('data/2023-05-25-data.json')
  .then(response => response.json())
  .then(data => visualize(data));

let width = window.innerWidth
let height = window.innerHeight
let centerX = width / 2;
let centerY = height / 2;

let colorNodeInactive = "rgba(238, 238, 238, 0.406)";
let colorNodeActive = "#f6b93b";
let colorLinkInactive = "#4a69bd";
let colorLinkActive = "lightblue";
let colorTextInactive = "#4a69bd";
let colorTextActive = "lightblue";
let nodeRadiusActive = 15;
let nodeRadiusInactive = 8;


function visualize(data) {
  let nodes = data.nodes;
  let links = data.links;
  let results = [];

  // https://stackoverflow.com/a/8837505
  // Simple function to sort an array of objects, based on a key in the objects
  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }


  // make search results clickable. Only needs to run once since it is via event delegation
  document.querySelector('.search-results-list').addEventListener("click", function (e) {
    if (e.target.matches("li")) {
      nodes.forEach(function (d) {
        if (d.id === e.target.innerHTML) {
          selectNode(d);

          // Apply the translation to the SVG container
          let translateX = centerX - d.x;
          let translateY = centerY - d.y;

          // // https://stackoverflow.com/a/55481420
          // // Create a zoom transform from d3.zoomIdentity
          // let transform = d3.zoomIdentity
          //   .translate(translateX, translateY);

          // // Apply the zoom and trigger a zoom event:
          // svg.call(zoom.transform, transform);


          // let transform = d3.zoomIdentity
          //   .translate(translateX, translateY);

          // Select the element you want to animate
          // var svg = d3.select("svg");

          // Apply the transition
          svg.transition()
            .duration(1000) // Specify the duration of the transition in milliseconds
            .call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY));
        }
      })
    }

    if (e.target.matches(".close")) {
      // Run your code to close a modal
    }
  }, false);

  let sortedNodes = sortByKey(nodes, 'id');

  sortedNodes.forEach(function (d, index) {
    // console.log('d: ', d);
    results.push(`<li data-indexnumber="${index}">` + d.id + `</li>`);
  });
  document.querySelector('.search-results-list').innerHTML = results.join('');

  // function that runs onchange of input.search-box
  function search(nodes, svgNodes) {
    let input = document.querySelector('.search-input').value;
    results = [];
    nodes.forEach(function (d, index) {

      // if text element contains input value
      if (d.id.includes(input)) {
        results.push(`<li data-indexnumber="${index}">` + d.id + `</li>`);
      }
    });
    document.querySelector('.search-results-list').innerHTML = results.join('');
  }

  // run search function on input.search-box change
  document.querySelector('.search-input').addEventListener('input', function () { search(nodes, nodeElements) });

  function getNeighbors(node) {
    return links.reduce(function (neighbors, link) {
      if (link.target.id === node.id) {
        neighbors.push(link.source.id)
      } else if (link.source.id === node.id) {
        neighbors.push(link.target.id)
      }
      return neighbors
    },
      [node.id]
    )
  }

  function isNeighborLink(node, link) {
    return link.target.id === node.id || link.source.id === node.id
  }


  function getNodeColor(node, neighbors) {
    if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
      return colorNodeActive
    } else {
      return colorNodeInactive
    }
  }
  function getNodeRadius(node, neighbors) {
    if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
      return nodeRadiusActive
    } else {
      return nodeRadiusInactive
    }
  }
  function getNodeShadow(node, neighbors) {
    if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
      return "drop-shadow(0px 0px 10px rgb(246, 184, 59, 1))"
    } else {
      return "none"
    }
  }


  function getLinkColor(node, link) {
    return isNeighborLink(node, link) ? colorLinkActive : colorLinkInactive
  }

  function getTextColor(node, neighbors) {
    return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? colorTextActive : colorTextInactive
  }


  let svg = d3.select('svg')
  svg.attr('width', width).attr('height', height)

  // simulation setup with all forces
  let linkForce = d3
    .forceLink()
    // .distance(300)
    .id(function (link) { return link.id })
    .strength(function (link) {
      return link.size
    })

  // let simulation = d3
  //   .forceSimulation()
  //   .force('link', linkForce)
  //   .force('charge', d3.forceManyBody().strength(-100))
  //   .force('center', d3.forceCenter(width / 2, height / 2))


  let simulation = d3
    .forceSimulation()
    // .force('link', linkForce)
    .force("link", d3.forceLink().distance(300).id(function (d) { return d.id; }))
    .force('charge', d3.forceManyBody().strength(-100))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .alphaDecay(0.02); // Adjust the alphaDecay value as needed





  let dragDrop = d3.drag().on('start', function (node) {
    node.fx = node.x
    node.fy = node.y
  }).on('drag', function (node, event) {
    simulation.alphaTarget(0.7).restart()
    node.fx = event.x
    node.fy = event.y
  }).on('end', function (node, event) {
    if (!event.active) {
      simulation.alphaTarget(0)
    }
    node.fx = null
    node.fy = null
  })

  function selectNodeStyling(selectedNode) {
    let neighbors = getNeighbors(selectedNode)

    // we modify the styles to highlight selected nodes
    nodeElements.attr('fill', function (node) {
      return getNodeColor(node, neighbors)
    })
    nodeElements.attr('r', function (node) {
      return getNodeRadius(node, neighbors)//@@
    })
    nodeElements.attr('filter', function (node) {
      return getNodeShadow(node, neighbors)//@@
    })
    textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
    linkElements.attr('stroke', function (link) { return getLinkColor(selectedNode, link) })

    // markerElements.attr('fill', function (link) { return getLinkColor(selectedNode, link) })

  }

  function selectNode(selectedNode) {
    selectNodeStyling(selectedNode);
  }
  function selectNodeClick(a, selectedNode) {
    // we only need second argument, which is selectedNode
    selectNodeStyling(selectedNode);
  }





  let linkElements = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke-width", 1)
    .attr("stroke", colorLinkInactive);
  // .attr("marker-start", (d, i) => `url(#arrowhead-${i})`);

  let textElements = svg.append("g")
    .attr("class", "texts")
    .selectAll("text")
    .data(nodes)
    .enter().append("text")
    .text(function (node) { return node.id })
    .attr("font-size", 15)
    .attr("fill", colorTextInactive)
    // .attr("fill", "rgba(50, 50, 50, 0.05)")
    // .attr("stroke", "rgba(50, 50, 50, 0.05)")
    .attr("dx", 15)
    .attr("dy", 4)

  let nodeElements = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("r", nodeRadiusInactive)
    .attr("fill", getNodeColor)
    .attr("filter", getNodeShadow)
    .call(dragDrop)
    .on('click', selectNodeClick)//https://stackoverflow.com/q/64138005



  // // Define the markers
  // let markerElements = svg.append("defs")
  //   .selectAll("marker")
  //   .data(links)
  //   .enter().append("marker")
  //   .attr("id", (d, i) => `arrowhead-${i}`)
  //   .attr("viewBox", "0 -5 10 10")
  //   .attr("refX", 30)
  //   .attr("refY", 0)
  //   .attr("markerWidth", 60)
  //   .attr("markerHeight", 60)
  //   .attr("orient", "180") // Rotated 180 degrees
  //   .append("path")
  //   .attr("d", "M0,-5L10,0L0,5")
  //   .attr("fill", "red");


  simulation.nodes(nodes).on('tick', () => {
    nodeElements
      .attr('cx', function (node) { return node.x })
      .attr('cy', function (node) { return node.y })
    textElements
      .attr('x', function (node) { return node.x })
      .attr('y', function (node) { return node.y })
    linkElements
      .attr('x1', function (link) { return link.source.x })
      .attr('y1', function (link) { return link.source.y })
      .attr('x2', function (link) { return link.target.x })
      .attr('y2', function (link) { return link.target.y })
  })

  simulation.force("link").links(links)

  let zoomCallback = function (event) {
    nodeElements.attr("transform", event.transform);
    linkElements.attr("transform", event.transform);
    textElements.attr("transform", event.transform);
  }

  // Add zoom behavior to the SVG container
  let zoom = d3.zoom()
    .on("zoom", zoomCallback);

  svg.call(zoom);

  // function linkArc(d) {
  //   var dx = d.target.x - d.source.x,
  //     dy = d.target.y - d.source.y,
  //     dr = Math.sqrt(dx * dx + dy * dy);
  //   return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  // }


}

// https://codepen.io/elisabeth_hamel/pen/WLeGwQ
window.onload = function () {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  let windowW, stars, nbStars;

  function Star(starsIndex) {
    this.id = starsIndex;
    this.x = Math.random() * windowW;
    this.y = Math.random() * window.outerHeight;
    this.on = Math.random() > 0.1;
    this.size = Math.random() * (13 - 1) + 1;
    this.opacity = this.on ? Math.random() * 0.8 : 0;
    this.clign = Math.random() > 0.5;
  }

  Star.prototype.draw = function () {
    let halfSize = this.size / 2,
      curve = this.size / 2.75,
      maxX = this.x + halfSize,
      maxY = this.y + halfSize,
      random = Math.random(),
      speed = random * (0.015 - 0.005) + 0.005;

    if (this.on) {
      if (this.opacity > random * (1 - 0.6) + 0.6 || this.opacity < random * 0.3) {
        this.clign = !this.clign;
      }
      this.opacity = this.clign ? this.opacity + speed : this.opacity - speed;
      this.on = random > 0.005;
    } else {
      this.opacity = this.opacity < 0 ? 0 : this.opacity - speed;
      this.on = random > 0.5;
    }

    context.fillStyle = '#fff';

    // fix - canvas desn't understand negative values
    context.globalAlpha = this.opacity < 0 ? 0 : this.opacity;
    context.globalAlpha = this.opacity > 1 ? 1 : this.opacity;

    context.beginPath();
    context.moveTo(maxX, this.y);
    context.bezierCurveTo(this.x + curve, maxY, this.x + curve, maxY, maxX, this.y + this.size);
    context.bezierCurveTo(this.x + this.size - curve, maxY, this.x + this.size - curve, maxY, maxX, this.y);
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(this.x, maxY);
    context.bezierCurveTo(maxX, this.y + curve, maxX, this.y + curve, this.x + this.size, maxY);
    context.bezierCurveTo(maxX, this.y + this.size - curve, maxX, this.y + this.size - curve, this.x, maxY);
    context.fill();
    context.closePath();
  };

  function drawSky() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i in stars) {
      stars[i].draw();
    }

    requestAnimationFrame(drawSky);
  }

  function init() {
    windowW = window.outerWidth;
    nbStars = windowW / 5;

    canvas.width = window.outerWidth;
    canvas.height = window.outerHeight;

    stars = [];
    nbStars = windowW / 5;

    for (let i = 0; i < nbStars; i++) {
      stars[i] = new Star(i);
    }
  }

  canvas.id = 'stars';
  document.body.appendChild(canvas);

  init();
  drawSky();

  window.addEventListener('resize', init);
};

// select audio element
const audio = document.querySelector('#audio');
// select button
const button = document.querySelector('#audio-play');
// play audio
button.addEventListener('click', function (e) {
  e.preventDefault();
  // check if context is in suspended state (autoplay policy)
  if (audio.paused) {
    audio.play();
    // if track is playing pause it
    button.innerHTML = '⏸';
  } else {
    audio.pause();
    button.innerHTML = '▶️';
  }
});
