import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("post/:postId", "routes/post.tsx"),

    //Nested Routes
    route("dashboard", "routes/dashboard.tsx", [
        route("finances", "routes/finances.tsx"),
        route("personal-info", "routes/personal-info.tsx")
    ]),

    /*
    layout("routes/dashboard.tsx", [
        route("finances", "routes/finances.tsx"),
        route("personal-info", "routes/personal-info.tsx")
    ])
        */
] satisfies RouteConfig;
