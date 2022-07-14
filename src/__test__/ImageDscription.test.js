import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import ImageDescription from "../components/ImageDescription";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);
const mockLiked = jest.fn();
test("image description", async () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <ImageDescription
        liked={mockLiked}
        data={{
          id: "c8-hjf-OgfI",
          created_at: "2022-02-15T22:40:10-05:00",
          updated_at: "2022-07-13T10:35:24-04:00",
          promoted_at: null,
          width: 7952,
          height: 5304,
          color: "#40c0d9",
          blur_hash: "LEE5EUR6ITS%dp}Sn5Fa1ir?;eR+",
          description: null,
          alt_description: null,
          urls: {
            raw: "https://images.unsplash.com/photo-1644982648791-a010e61aa845?ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1",
            full: "https://images.unsplash.com/photo-1644982648791-a010e61aa845?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1\u0026q=80",
            regular:
              "https://images.unsplash.com/photo-1644982648791-a010e61aa845?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
            small:
              "https://images.unsplash.com/photo-1644982648791-a010e61aa845?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
            thumb:
              "https://images.unsplash.com/photo-1644982648791-a010e61aa845?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1644982648791-a010e61aa845",
          },
          links: {
            self: "https://api.unsplash.com/photos/c8-hjf-OgfI",
            html: "https://unsplash.com/photos/c8-hjf-OgfI",
            download:
              "https://unsplash.com/photos/c8-hjf-OgfI/download?ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA",
            download_location:
              "https://api.unsplash.com/photos/c8-hjf-OgfI/download?ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA",
          },
          categories: [],
          likes: 69,
          liked_by_user: false,
          current_user_collections: [],
          sponsorship: {
            impression_urls: [
              "https://ad.doubleclick.net/ddm/trackimp/N558202.3286893UNSPLASH/B27256153.328733777;dc_trk_aid=520815018;dc_trk_cid=166854621;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=?",
            ],
            tagline: "Unlimited Me, In Portrait",
            tagline_url:
              "https://ad.doubleclick.net/ddm/trackclk/N558202.3286893UNSPLASH/B27256153.328733777;dc_trk_aid=520815018;dc_trk_cid=166854621;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=?https://www.oppo.com/en/events/reno-academy/?utm_medium=display\u0026utm_source=unsplash\u0026utm_campaign=oppo-hylink-global_en-brand-lifecycle--cpm-reach_unsplash_hqunsplash_design3_hq-20220215-20220531-awareness-reach\u0026utm_content_image_ads-3264x2448",
            sponsor: {
              id: "slnHk0G_RmE",
              updated_at: "2022-07-13T13:38:54-04:00",
              username: "oppo",
              name: "OPPO",
              first_name: "OPPO",
              last_name: null,
              twitter_username: null,
              portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
              bio: "OPPO is a leading global smart device brand. Love portrait photography? Join the #RenoAcademy photo contest to win #OPPOReno7Series 👇\r\n\r\n",
              location: null,
              links: {
                self: "https://api.unsplash.com/users/oppo",
                html: "https://unsplash.com/@oppo",
                photos: "https://api.unsplash.com/users/oppo/photos",
                likes: "https://api.unsplash.com/users/oppo/likes",
                portfolio: "https://api.unsplash.com/users/oppo/portfolio",
                following: "https://api.unsplash.com/users/oppo/following",
                followers: "https://api.unsplash.com/users/oppo/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                medium:
                  "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                large:
                  "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
              },
              instagram_username: null,
              total_collections: 0,
              total_likes: 0,
              total_photos: 23,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          topic_submissions: {},
          user: {
            id: "slnHk0G_RmE",
            updated_at: "2022-07-13T13:38:54-04:00",
            username: "oppo",
            name: "OPPO",
            first_name: "OPPO",
            last_name: null,
            twitter_username: null,
            portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
            bio: "OPPO is a leading global smart device brand. Love portrait photography? Join the #RenoAcademy photo contest to win #OPPOReno7Series 👇\r\n\r\n",
            location: null,
            links: {
              self: "https://api.unsplash.com/users/oppo",
              html: "https://unsplash.com/@oppo",
              photos: "https://api.unsplash.com/users/oppo/photos",
              likes: "https://api.unsplash.com/users/oppo/likes",
              portfolio: "https://api.unsplash.com/users/oppo/portfolio",
              following: "https://api.unsplash.com/users/oppo/following",
              followers: "https://api.unsplash.com/users/oppo/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
              medium:
                "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
              large:
                "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
            },
            instagram_username: null,
            total_collections: 0,
            total_likes: 0,
            total_photos: 23,
            accepted_tos: true,
            for_hire: false,
            social: {
              instagram_username: null,
              portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
              twitter_username: null,
              paypal_email: null,
            },
          },
        }}
        like={true}
      />
    </Provider>
  );
  const element = await screen.findByText(/TOTAL LIKE/i);
  expect(element).toBeInTheDocument();
});


test("onclick in imagDesciption", async () => {
  const store = mockStore();

  render(
    <Provider store={store}>
      <ImageDescription
        like={mockLiked}
        data={{
          id: "c8-hjf-OgfI",
          created_at: "2022-02-15T22:40:10-05:00",
          updated_at: "2022-07-13T10:35:24-04:00",
          promoted_at: null,
          width: 7952,
          height: 5304,
          color: "#40c0d9",
          blur_hash: "LEE5EUR6ITS%dp}Sn5Fa1ir?;eR+",
          description: null,
          alt_description: null,
          urls: {
            raw: "https://images.unsplash.com/photo-1644982648791-a010e61aa845?ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1",
            full: "https://images.unsplash.com/photo-1644982648791-a010e61aa845?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1\u0026q=80",
            regular:
              "https://images.unsplash.com/photo-1644982648791-a010e61aa845?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
            small:
              "https://images.unsplash.com/photo-1644982648791-a010e61aa845?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
            thumb:
              "https://images.unsplash.com/photo-1644982648791-a010e61aa845?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1644982648791-a010e61aa845",
          },
          links: {
            self: "https://api.unsplash.com/photos/c8-hjf-OgfI",
            html: "https://unsplash.com/photos/c8-hjf-OgfI",
            download:
              "https://unsplash.com/photos/c8-hjf-OgfI/download?ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA",
            download_location:
              "https://api.unsplash.com/photos/c8-hjf-OgfI/download?ixid=MnwzNDUyMDl8MXwxfGFsbHwxfHx8fHx8M3x8MTY1Nzc3NjQ5MA",
          },
          categories: [],
          likes: 69,
          liked_by_user: false,
          current_user_collections: [],
          sponsorship: {
            impression_urls: [
              "https://ad.doubleclick.net/ddm/trackimp/N558202.3286893UNSPLASH/B27256153.328733777;dc_trk_aid=520815018;dc_trk_cid=166854621;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=?",
            ],
            tagline: "Unlimited Me, In Portrait",
            tagline_url:
              "https://ad.doubleclick.net/ddm/trackclk/N558202.3286893UNSPLASH/B27256153.328733777;dc_trk_aid=520815018;dc_trk_cid=166854621;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=?https://www.oppo.com/en/events/reno-academy/?utm_medium=display\u0026utm_source=unsplash\u0026utm_campaign=oppo-hylink-global_en-brand-lifecycle--cpm-reach_unsplash_hqunsplash_design3_hq-20220215-20220531-awareness-reach\u0026utm_content_image_ads-3264x2448",
            sponsor: {
              id: "slnHk0G_RmE",
              updated_at: "2022-07-13T13:38:54-04:00",
              username: "oppo",
              name: "OPPO",
              first_name: "OPPO",
              last_name: null,
              twitter_username: null,
              portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
              bio: "OPPO is a leading global smart device brand. Love portrait photography? Join the #RenoAcademy photo contest to win #OPPOReno7Series 👇\r\n\r\n",
              location: null,
              links: {
                self: "https://api.unsplash.com/users/oppo",
                html: "https://unsplash.com/@oppo",
                photos: "https://api.unsplash.com/users/oppo/photos",
                likes: "https://api.unsplash.com/users/oppo/likes",
                portfolio: "https://api.unsplash.com/users/oppo/portfolio",
                following: "https://api.unsplash.com/users/oppo/following",
                followers: "https://api.unsplash.com/users/oppo/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                medium:
                  "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                large:
                  "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
              },
              instagram_username: null,
              total_collections: 0,
              total_likes: 0,
              total_photos: 23,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          topic_submissions: {},
          user: {
            id: "slnHk0G_RmE",
            updated_at: "2022-07-13T13:38:54-04:00",
            username: "oppo",
            name: "OPPO",
            first_name: "OPPO",
            last_name: null,
            twitter_username: null,
            portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
            bio: "OPPO is a leading global smart device brand. Love portrait photography? Join the #RenoAcademy photo contest to win #OPPOReno7Series 👇\r\n\r\n",
            location: null,
            links: {
              self: "https://api.unsplash.com/users/oppo",
              html: "https://unsplash.com/@oppo",
              photos: "https://api.unsplash.com/users/oppo/photos",
              likes: "https://api.unsplash.com/users/oppo/likes",
              portfolio: "https://api.unsplash.com/users/oppo/portfolio",
              following: "https://api.unsplash.com/users/oppo/following",
              followers: "https://api.unsplash.com/users/oppo/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
              medium:
                "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
              large:
                "https://images.unsplash.com/profile-1644119509068-9bd2b82a0f46image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
            },
            instagram_username: null,
            total_collections: 0,
            total_likes: 0,
            total_photos: 23,
            accepted_tos: true,
            for_hire: false,
            social: {
              instagram_username: null,
              portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
              twitter_username: null,
              paypal_email: null,
            },
          },
        }}
        liked={true}
      />
    </Provider>
  );
  const clickEvent = screen.getByTestId("like-click");
  const liketext =  screen.getByTestId("likeText");
  fireEvent.click(clickEvent);
  expect(liketext).toHaveTextContent('TOTAL LIKES :70');
});
