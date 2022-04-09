
Events.on(EventType.ClientLoadEvent, cons(e => {
    var dialog = new BaseDialog(Core.bundle.format("mod.tws.displayName")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);

    dialog.buttons.defaults().size(210, 64);
    dialog.buttons.button("@close", run(() => {
        dialog.hide();
    })).size(210, 64);

    dialog.cont.pane((() => {
        var table = new Table();
        table.add(Core.bundle.format("mod.tws.displayName")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        table.add("Authors:"+Core.bundle.format("mod.tws.author")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        table.add("Welcome to Teedustry!!!");
        table.row();
        return table;
    })()).grow().center().maxWidth(620);
    dialog.show();
}));
