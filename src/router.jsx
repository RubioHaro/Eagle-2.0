var routes = (

  <Route handler={App} path="/">
    <Route name="almacen" handler={Almacen}>
      <Route name="visitors-home" path="home" handler={principalAlmacen} />
      <Route name="visitors-info" path="info" handler={systemInfo} />
    </Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});